class HighscoresTable < ActiveRecord::Migration[5.0]
  def change
    create_table :highscores do |t|
      t.string :name, null: false
      t.integer :score, null: false

      t.timestamps
    end
  end
end
