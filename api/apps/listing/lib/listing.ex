defmodule Listing do
  import Ecto.{Query}

  alias DB.Repo
  alias Listing.{Address, Property}

  @page_size 20

  import IEx

  def search(params) do
    query =
      Property
      |> order_by(desc: :updated_at)
      |> preload([:address, :account])

    properties =
      query
      |> paginate(params)
      |> Repo.all

    pages =
      query
      |> Repo.aggregate(:count, :id)
      |> Kernel./(@page_size)
      |> Float.ceil

    {:ok, %{properties: properties, pages: pages}}
  end

  defp paginate(query, params) do
    query
    |> offset(^calc_start(get_page(params)))
    |> limit(^@page_size)
  end

  defp calc_start(page) do
    (page - 1) * @page_size
  end

  defp get_page(%{"page" => page}), do: to_integer(page)
  defp get_page(%{page: page}), do: to_integer(page)
  defp get_page(_), do: 1

  defp to_integer(val) when is_bitstring(val), do: String.to_integer(val)
  defp to_integer(val), do: val
end
