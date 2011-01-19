class SearchController < ApplicationController

  def search
    @query = params[:q]
    @results = Game.search(@query).paginate :page => params[:page], :per_page => 10

    render :layout => false if request.xhr?
  end

end
