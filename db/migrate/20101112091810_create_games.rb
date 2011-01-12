class CreateGames < ActiveRecord::Migration
  def self.up
    create_table :games do |t|
      t.string :title
      t.string :url
      t.timestamps
    end
    add_index :games, :title
  end

  def self.down
    drop_table :games
  end
end
