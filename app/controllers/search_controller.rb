class SearchController < ApplicationController

  def search
    @query = params[:q]

    if @query.present?
      @results = Game.search(@query).paginate :page => params[:page], :per_page => 10
    else
      redirect_to :root
    end
  end

end
