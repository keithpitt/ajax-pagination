AjaxPagination::Application.routes.draw do

  match 'search' => 'search#search'

  root :to => 'search#index'

end
