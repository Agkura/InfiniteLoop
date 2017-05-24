class Api::QuestionVotesController < ApplicationController

  def create
    question_vote = QuestionVote.new(question_vote_params)
    if question_vote.save
      @question = question_vote.question
      render :show
    else
      render(
      json: ["Error"],
      status: 422
      )
    end
  end

  def edit
    question_vote = QuestionVote.find_by(question_id: params[:question_vote][:question_id], author_id: params[:question_vote][:author_id])
    question_vote.update_attributes(question_vote_params)
    if question_vote.valid?
      question_vote.save
      @question = question_vote.question
      render :show
    else
      render(
      json: ["Error"],
      status: 422
      )
    end
  end


  private

  def question_vote_params
    params.require(:question_vote).permit(:question_id, :author_id, :score)
  end
end
