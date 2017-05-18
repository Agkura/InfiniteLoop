class Api::AnswersController < ApplicationController

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      render :show
    else
      render(
      json: @answer.errors.full_messages,
      status: 422
      )
    end
  end

  def update
    @answer = Answer.find_by(id: params[:id])
    @answer.update_attributes(answer_params)
    if @answer.valid?
      @answer.save
      render :show
    else
      render(
      json: @answer.errors.full_messages,
      status: 422
      )
    end
  end

  def index
    @answers = Answer.includes(:author).where('answers.question_id = ?', params[:question_id])
    render :index
  end

  def destroy
    @answer = Answer.find_by(id: params[:id])
    @answer.destroy
    render :show
  end

  private

  def answer_params
    params.require(:answer).permit(:body, :author_id, :question_id)
  end
end
