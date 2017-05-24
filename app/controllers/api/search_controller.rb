class Api::SearchController < ApplicationController

  def search
    search_query = "%" << params[:query].downcase << "%"
    @questions = Question.includes(:author)
                 .where('title LIKE ? OR body LIKE ?', search_query, search_query)
                 .limit(20)
    @answers = Answer.includes(:author)
                     .where('body LIKE ?', search_query)
                     .limit(20)
    render :index
  end

end
