class Api::QuestionsController < ApplicationController
  def show

  end

  def index
    @questions = Question.all
    render :index
  end
end
