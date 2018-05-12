# defmodule DB.Ecto.Type.Point do
#   @behaviour Ecto.Type

#   alias Postgrex.Extension.Point, as: PointExt
#   alias Postgrex.Point

#   def type, do: :point

#   @doc """
#   When casting in changesets
#   """

#   def cast(data) when is_binary(data) do
#     {:ok, PointExt.decode(data)}
#   end

#   def cast(%Point{} = point) do
#     {:ok, point}
#   end

#   def cast(%{x: _, y: _} = map) do
#     {:ok, struct!(Point, map)}
#   end

#   def cast(_), do: :error

#   @doc """
#   When loading from database
#   """

#   def load(data) when is_binary(data) do
#     {:ok, PointExt.decode(data)}
#   end

#   def load(_), do: :error

#   @doc """
#   When dumping to database
#   """

#   def dump(%Point{} = point) do
#     {:ok, PointExt.encode(point)}
#   end

#   def dump(%{x: _, y: _} = map) do
#     point = struct!(Point, map)
#     binary = PointExt.encode(point)

#     {:ok, binary}
#   end

#   def dump(_), do: :error
# end