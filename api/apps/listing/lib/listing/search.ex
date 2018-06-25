defmodule Listing.Search do

  import Ecto.{Query}

  alias DB.Repo
  alias Listing.{Address, Property}

  @page_size 20

  def query(params) do
    current_page = get_page(params)

    query =
      Property
      |> account(Map.get(params, :account_id))
      |> order_by(desc: :updated_at)
      |> preload([:address, :account])

    properties =
      query
      |> paginate(current_page)
      |> Repo.all

    total_pages =
      query
      |> calc_total_pages

    response = %{
      properties: properties,
      current_page: current_page,
      total_pages: total_pages
    }
    {:ok, response}
  end

  defp account(query, nil), do: query

  defp account(query, account_id) do
    query
    |> where(account_id: ^account_id)
  end

  defp paginate(query, current_page) do
    query
    |> offset(^calc_start(current_page))
    |> limit(^@page_size)
  end

  defp calc_total_pages(query) do
    query
    |> Repo.aggregate(:count, :id)
    |> Kernel./(@page_size)
    |> Float.ceil
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