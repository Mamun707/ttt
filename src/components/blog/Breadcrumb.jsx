import React from 'react'

export const Breadcrumb = () => {
  return (
    <section className="breadcrumb-area breadcrumb-bg" style={{backgroundImage:'url("img/images/newsbanner.png")'}}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="breadcrumb-content">
            <h2 className="title">T-Sports <span style={{color:"#CE011B"}}>News</span></h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">News</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
