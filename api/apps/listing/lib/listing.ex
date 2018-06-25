defmodule Listing do
  def search(params) do
    Listing.Search.query(params)
  end
end
