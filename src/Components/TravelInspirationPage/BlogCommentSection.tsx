import React from 'react'

const BlogCommentSection = () => {
    return (
        <>
            <div className="comment-and-form-area pt-100">
                <div className="inquiry-form">
                    <h2 className="comment-title">
                        Leave A Comment:
                    </h2>

                    <form className="form-wrap">
                        <div className="grid grid-cols-2 gap-4 mb-50">
                            <div className="col-md-6">
                                <div className="form-inner two">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Mr. Daniel" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-inner two">
                                    <label>Your Email</label>
                                    <input type="email" placeholder="info@example.com" />
                                </div>
                            </div>
                            <div className="col-md-12 col-span-2">
                                <div className="form-inner two">
                                    <label>Message</label>
                                    <textarea placeholder="Write comment" defaultValue={""} />
                                </div>
                            </div>
                            <div className="col-md-12 col-span-2">
                                <div className="form-inner2">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input mr-2"
                                            type="checkbox"
                                            id="contactCheck22"
                                        />
                                        <label className="form-check-label" htmlFor="contactCheck22">
                                            Please save my name, email address for the next time I comment.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-inner">
                            <button type="submit" className="primary-btn1">
                                <span>
                                    Post Comment
                                    <svg
                                        width={10}
                                        height={10}
                                        viewBox="0 0 10 10"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                    </svg>
                                </span>
                                <span>
                                    Post Comment
                                    <svg
                                        width={10}
                                        height={10}
                                        viewBox="0 0 10 10"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default BlogCommentSection