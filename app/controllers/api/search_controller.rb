class Api::SearchController < ApplicationController

  def search
    search_query = "%" << params[:query][:search].downcase << "%"
    @answers = Answer.includes(:author)
              .where('body LIKE ?', search_query)
              .limit(20)
    question_index = @answers.map { |answer| answer.question_id }

    @questions = Question.includes(:author)
                 .where('title LIKE ? OR body LIKE ? OR id in (?)', search_query, search_query, question_index)
                 .limit(20)
    render 'api/questions/index'
  end

end
