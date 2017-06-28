class HighScoresController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @highscore = HighScore.create(name: params[:name], score: params[:score])
    @highscores = HighScore.all.sort {|a,b| b.score <=> a.score}
    if @highscores.count > 10
      @highscores[10..-1].each do |score|
        score.delete
      end
    end
    @highscores = HighScore.all
    render :index
  end

  def index
    @highscores = HighScore.all.sort {|a,b| b.score <=> a.score}
    render :index
  end
end
