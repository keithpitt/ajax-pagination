class SearchController < ApplicationController

  def search
    @query = params[:q]
    @results = Game.search(@query).paginate :page => params[:page], :per_page => 10

    respond_to do |wants|
      wants.html
      wants.js do
        render :partial => 'results', :locals => { :results => @results }
      end
    end
  end

end
