class Api::SearchController < ApplicationController

  def search
    search_query = "%" << params[:query].downcase << "%"
    @answers = Answer.includes(:author)
              .where('body iLIKE ?', search_query)
              .limit(20)
    question_index = @answers.map { |answer| answer.question_id }

    @questions = Question.includes(:author)
                 .where('title iLIKE ? OR body iLIKE ? OR id in (?)', search_query, search_query, question_index)
                 .limit(20)
    render 'api/questions/index'
  end

end
