import React, { Component } from "react";
import { loadTree } from "../menuTreeHelper";
import { NavLink } from "react-router-dom";

export default class SidebarAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    let userData = JSON.parse(localStorage.getItem("user"));
    this.setState({ user: userData });
    loadTree();
  }

  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="/" className="brand-link">
          <span className="brand-text font-weight-light ml-1">Admin</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={process.env.PUBLIC_URL + "/user-64.png"}
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                {this.state.user.fullname}
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <span className="right badge badge-success">Beranda</span>
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/departments" className="nav-link">
                  <i className="nav-icon fa fa-building" />
                  <p>Departemen</p>
                </NavLink>
              </li>
              <li className="nav-item has-treeview">
                <NavLink
                  to="/fake-url"
                  className="nav-link"
                  activeClassName="nav-link"
                >
                  <i className="nav-icon fa fa-user" />
                  <p>
                    Karyawan
                    <i className="right fas fa-angle-left" />
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/employee-add" className="nav-link">
                      <i className="fa fa-user-plus nav-icon" />
                      <p>Tambah Karyawan</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/employee-list" className="nav-link">
                      <i className="fas fa-users nav-icon" />
                      <p>Daftar Karyawan</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/job-list" className="nav-link">
                  <i className="nav-icon fas fa-briefcase" />
                  <p>Daftar Job</p>
                </NavLink>
              </li>
              <li className="nav-item has-treeview">
                <NavLink
                  to="/fake-url"
                  className="nav-link"
                  activeClassName="nav-link"
                >
                  <i className="nav-icon fa fa-rocket" />
                  <p>
                    Pengajuan
                    <i className="right fas fa-angle-left" />
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/application" className="nav-link">
                      <i className="fa fa-plus nav-icon" />
                      <p>Tambah Pengajuan</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/application-list" className="nav-link">
                      <i className="fas fa-list-ul nav-icon" />
                      <p>Daftar Pengajuan</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <NavLink
                  to="/fake-url"
                  className="nav-link"
                  activeClassName="nav-link"
                >
                  <i className="nav-icon fas fa-euro-sign" />
                  <p>
                    Manajemen Penggajian{" "}
                    <i className="right fas fa-angle-left" />
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/salary-details" className="nav-link">
                      <i className="fas fa-euro-sign nav-icon" />
                      <p>Kelola Detail Gaji</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/salary-list" className="nav-link">
                      <i className="fas fa-users nav-icon" />
                      <p>Daftar Gaji Karyawan</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/payment" className="nav-link">
                      <i className="fas fa-money-check nav-icon" />
                      <p>Buat Pembayaran</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <NavLink
                  to="/fake-url"
                  className="nav-link"
                  activeClassName="nav-link"
                >
                  <i className="nav-icon fas fa-money-bill" />
                  <p>
                    Manajemen Pengeluaran{" "}
                    <i className="right fas fa-angle-left" />
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/expense" className="nav-link">
                      <i className="fas fa-shopping-cart nav-icon" />
                      <p>Tambah Pengeluaran</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/expense-report" className="nav-link">
                      <i className="fas fa-file-invoice nav-icon" />
                      <p>Laporan Pengeluaran</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink exact to="/announcement" className="nav-link">
                  <i className="nav-icon fa fa-bell" />
                  <p>Pengumuman</p>
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}
