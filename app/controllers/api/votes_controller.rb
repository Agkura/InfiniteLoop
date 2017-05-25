class Api::VotesController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      @answer = @vote.answer
      render :show
    else
      render(
        json: vote.errors.full_messages,
        status: 422
      )
    end
  end

  def edit
    @vote = Vote.find_by(answer_id: params[:vote][:answer_id], author_id: params[:vote][:author_id])
    @vote.update_attributes(vote_params)
    if @vote.valid?
      @vote.save
      @answer = @vote.answer
      render :show
    else
      render(
      json: vote.errors.full_messages,
      status: 422
      )
    end
  end


  private

  def vote_params
    params.require(:vote).permit(:answer_id, :author_id, :status)
  end
end
