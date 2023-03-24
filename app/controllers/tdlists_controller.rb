class TdlistsController < ApplicationController
  def index
    tdlists = Tdlist.order(created_at: :asc)
    render json: tdlists
  end

  def create
    tdlist = Tdlist.create(tdlist_params)
    render json: tdlist
  end

  def update
    tdlist = Tdlist.find(params[:id])
    tdlist.update(tdlist_params)
    render json: tdlist
  end

  def destroy
    tdlist = Tdlist.find(params[:id])
    tdlist.destroy
    head :no_content, status: :ok
  end

  private
  def tdlist_params
    params.require(:tdlist).permit(:title, :completed)
  end
end
