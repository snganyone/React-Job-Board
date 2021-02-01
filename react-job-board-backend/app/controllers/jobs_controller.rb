class JobsController < ApplicationController
    def index
        if(params[:query])
            @job = Job.search(params[:query])
            render json: @job, except: [:created_at, :updated_at]
        else
            @jobs = Job.all
            render json: @jobs, except: [:created_at, :updated_at]
        end
    end
end