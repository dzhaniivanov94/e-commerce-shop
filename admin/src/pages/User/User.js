import "./User.css";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1635638195283-55be6a3b81f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">anna becker</span>
                            <span className="userShowUserTitle">software dev</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">01.05.1990</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+32 592 23832</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">anna@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Tolbuhin | Bulgaria</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="annabeck99" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="anna becker" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="anna@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+32 592 23832" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Adress</label>
                                <input type="text" placeholder="Tolbuhin | Bulgaria" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.unsplash.com/photo-1633113087654-c49c686c2cdf?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;
