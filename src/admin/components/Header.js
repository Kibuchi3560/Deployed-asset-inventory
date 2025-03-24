// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../redux/authSlice';
// import { useNavigate, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { FaSearch, FaUserCircle } from 'react-icons/fa';
// import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleLogout = async () => {
//     try {
//       await axios.post('/api/logout', {}, { withCredentials: true });
//       dispatch(logout());
//       navigate('/login');
//     } catch (err) {
//       console.error('Logout failed:', err);
//     }
//   };

//   const userName = user ? user.name : 'Guest';

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log('Search query:', searchQuery);
//     // Implement search logic here
//   };

//   return (
//     <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
//       <Container fluid>
//         <Navbar.Brand as={NavLink} to="/">
//           ASSET INVENTORY MANAGEMENT SAMPLE WEB APPLICATION
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={NavLink} to="/admin/dashboard">
//               Dashboard
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/admin/users">
//               Manage Users
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/admin/assets">
//               Manage Assets
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/admin/requests">
//               Requests
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/admin/system-config">
//               System Config
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex me-3" onSubmit={handleSearch}>
//             <FormControl
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Button variant="outline-light" type="submit">
//               <FaSearch />
//             </Button>
//           </Form>
//           <Nav className="align-items-center">
//             <FaUserCircle size={30} className="me-2" />
//             <Nav.Link disabled>{userName}</Nav.Link>
//             <Button variant="outline-light" onClick={handleLogout} className="ms-2">
//               Logout
//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;
