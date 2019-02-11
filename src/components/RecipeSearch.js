import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {
      const {value,handleChange,handleSubmit}=this.props;
    return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 my-5 text-center">
                    <h1 className="text-capitalize"><strong>FOODS</strong></h1>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="input-group">
                        <input value={value}
                         onChange={handleChange}
                          type="text"
                           className="form-control" 
                           name="search"
                            placeholder="Search what do you want"/>
                        <div className="input-group-append"><button type="submit" className="input-group-text bg-primary text-white"><i className="fas fa-search"></i></button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
  }
}
