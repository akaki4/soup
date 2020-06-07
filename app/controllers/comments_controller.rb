class CommentsController < ApplicationController
  def create
    @cafeteria = Cafeteria.find(params[:cafeteria_id])
    @comment = @cafeteria.comments.build(comment_params)
    @comment.user_id = current_user.id
    render :index if @comment.save
  end

  def destroy
    @comment = Comment.find_by(id: params[:id],cafeteria_id: params[:cafeteria_id])
    @comment.destroy!
    render :index if @comment.destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, cafeteria_id: params[:cafeteria_id])
  end
end