class Api::AnswersController < ApplicationController

  def index
    @answers = Answer.includes(:author).where('answers.question_id = ?', params[:question_id])
    render :index
  end
end
