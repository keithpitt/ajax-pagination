class SearchController < ApplicationController

  def search
    @query = params[:q]

    if @query.present?
      @results = Game.search(params[:q])

    else
      redirect_to :root
    end
  end

end
