AjaxPagination::Application.routes.draw do

  match 'search' => 'search#search', :as => :search

  root :to => 'search#index'

end
