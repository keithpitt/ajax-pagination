class Game < ActiveRecord::Base

  validates_presence_of :title

  def self.search(query)
    where('UPPER(title) LIKE ?', "%#{query.upcase}%")
  end

end
