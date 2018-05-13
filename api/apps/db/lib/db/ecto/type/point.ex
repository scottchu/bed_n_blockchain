defmodule DB.Ecto.Type.Point do
  @behaviour Ecto.Type

  def type, do: :point

  @doc """
  When casting in changesets
  """
  def cast(%Postgrex.Point{} = point) do
    {:ok, point}
  end

  def cast(%{x: _, y: _} = map) do
    {:ok, struct!(Postgrex.Point, map)}
  end

  def cast(_), do: :error

  @doc """
  When loading from database
  """

  def load(%Postgrex.Point{} = point) do
    {:ok, point}
  end

  def load(_), do: :error

  @doc """
  When dumping to database
  """

  def dump(%Postgrex.Point{} = point) do
    {:ok, point}
  end

  def dump(%{x: _, y: _} = map) do
    point = struct!(Postgrex.Point, map)
    {:ok, point}
  end

  def dump(_), do: :error
end