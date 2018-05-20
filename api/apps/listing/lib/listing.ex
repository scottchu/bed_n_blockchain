defmodule Listing do
  import Ecto.Query

  alias DB.Repo
  alias Listing.{Address, Property}

  def search(params) do
    Property
    |> paginate(params)
    |> order_by(desc: :inserted_at)
    |> preload([:address, :account])
    |> Repo.all
  end

  @page_params %{"size" => 20, "page" => 1}
  defp paginate(query, params) do
    [start, size] =
      params
      |> Map.merge(@page_params)
      |> Map.take(["page", "size"])
      |> Map.values
      |> get_offset_and_size

    query
    |> offset(^start)
    |> limit(^size)
  end

  defp get_offset_and_size([page, size]) do
    [(page - 1) * size, size]
  end
end
