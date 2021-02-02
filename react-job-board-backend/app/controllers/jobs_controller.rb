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
    
        def create
            @job = Job.create(job_params)
            render json: @job, except: [:created_at, :updated_at]
        end

    def job_params
		params.require(:job).permit(:title, :employer, :location, :description, :release_date, :job_type)
    end

end