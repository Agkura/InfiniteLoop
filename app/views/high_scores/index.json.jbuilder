@highscores.each do |score|
  json.set! score.id do
    json.name score.name
    json.score score.score
  end
end
