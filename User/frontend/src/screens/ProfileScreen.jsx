import { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useUpdateUserMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import '../styles/Profile.css'

import profile from '../images/profile1.jpg'

const ProfileScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
    setContact(userInfo.contact);
    setLocation(userInfo.location);
  }, [userInfo.email, userInfo.name, userInfo.contact, userInfo.location]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
          contact,
          location
        }).unwrap();
        console.log(res);
        dispatch(setCredentials(res));
        toast.success('Profile updated successfully');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <div className="register_screen">
      <img src={profile} className="cover_image" />
      <FormContainer>
        <div className="regform">
          <h1 className="text-left mb-1 title">Profile</h1>
          <h4 className="text-left mb-4 subtitle">Update Your Profile</h4>
          <Form onSubmit={submitHandler}>
            <div className="form-grid">
              <Form.Group className="my-2" controlId="name">
                <Form.Label className="fw-bold font-monospace form_label">Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="my-2" controlId="email">
                <Form.Label className="fw-bold font-monospace form_label">
                  Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="my-2" controlId="password">
                <Form.Label className="fw-bold font-monospace form_label">
                  Password
                </Form.Label>
                <div className="input-with-icon">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                  <span
                    className="password-toggle"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </Form.Group>

              <Form.Group className="my-2" controlId="confirmPassword">
                <Form.Label className="fw-bold font-monospace form_label">Confirm Password</Form.Label>
                <div className="input-with-icon">
                  <Form.Control
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Form.Control>
                  <span
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </Form.Group>

              <Form.Group className="my-2" controlId="contact">
                <Form.Label className="fw-bold font-monospace form_label">
                  Contact No.
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="my-2" controlId="location">
                <Form.Label className="fw-bold font-monospace form_label">
                  Location
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <div className="button-container">
                <Button
                  type="submit"
                  className="mt-3 reg_btn"
                  variant="success"
                >
                  Update
                </Button>
              </div>
            </div>

            {isLoading && <Loader />}
          </Form>
        </div>
      </FormContainer>
    </div>
  );
};

export default ProfileScreen;