import React from "react";
import md5 from "md5";

import "./styles/BadgeNew.css";

//images
import logo from "../images/platziconf-logo.svg";
//components
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from '../components/PageLoading'

import api from "../api";

class BadgeNew extends React.Component {
  // initializate State
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarUrl:""
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form, // keep currents values
        [e.target.name]: e.target.value, // add values
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.state.form.avatarUrl = `https://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon` 
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false});
      this.props.history.push('/badges') //HISTORY COOL
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if(this.state.loading) {
      return(
        <PageLoading/>
      )
    }
    return (
      <>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={logo}
            alt="logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                email={this.state.form.email || "Email"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                twitter={this.state.form.twitter || "Twitter"}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
