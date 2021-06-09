import React, {  Component } from 'react';

function PostLoading(Component){
    return function PostLoadingComponent({isLoading, ...props}){
        if (!isLoading) return <Component {...props} />;
        return(
            <div className="row">
                <div className="col-md-12 text-center">
                We are waiting for the data to load!!
                    </div></div>
        )
    }
}
 
export default PostLoading;