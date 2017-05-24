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
    @questions = Question.includes(:author, :question_votes).all.order(created_at: :desc).offset( params[:offset] ).limit( 20 )
    render :index
  end

  def destroy
    @question = Question.find_by(id: params[:id])
    @question.destroy
    render :show
  end

  def user_questions
    @questions = Question.includes(:author, :question_votes).where('author_id = ?', current_user.id).offset( params[:offset] ).limit( 20 )
    render :index
  end

  def trending
      @questions = Question.includes( :author, :question_votes )
                           .joins( :answers )
                           .select('questions.*, count(answers) as answer_count')
                           .group( :id )
                           .order('answer_count desc')
                           .offset( params[:offset] )
                           .limit( 20 )
    render :index
  end

  def show
    @question  = Question.find_by(id: params[:id])
    render :show
  end

  private

  def question_params
    params.require(:question).permit(:body, :title, :author_id)
  end
end
