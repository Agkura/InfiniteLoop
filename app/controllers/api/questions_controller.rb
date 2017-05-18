class Api::QuestionsController < ApplicationController
  def create
    @question = Question.new(question_params)
    if @question.save
      render :show
    else
      render(
        json: @question.errors.full_messages,
        status: 422
      )
    end
  end

  def update
    @question = Question.find_by(id: params[:id])
    @question.update_attributes(question_params)
    if @question.valid?
      @question.save
      render :show
    else
      render(
      json: @question.errors.full_messages,
      status: 422
      )
    end
  end

  def index
    @questions = Question.includes(:author).all.limit( params[:offset] )
    render :index
  end

  def destroy
    @question = Question.find_by(id: params[:id])
    @question.destroy
    render :show
  end

  private

  def question_params
    params.require(:question).permit(:body, :title, :author_id, :offset)
  end
end
