class Api::VotesController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      render :show
    else
      render(
        json: ["Error"],
        status: 422
      )
    end
  end

  def edit
    @vote = Vote.find_by(id: params[:id])
    @vote.update_attributes(vote_params)
    if @vote.valid?
      @vote.save
      render :show
    else
      render(
      json: ["Error"],
      status: 422
      )
    end
  end


  private

  def vote_params
    params.require(:vote).permit(:answer_id, :author_id, :status)
  end
end
