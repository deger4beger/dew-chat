import React, {useState, useEffect} from 'react'
import Input from '../../components/shared/Input/Input';
import AuthTemplate from '../../components/templates/AuthTemplate/AuthTemplate';
import Button from '../../components/shared/Button/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authThunk } from '../../redux/slices/userThunks';
import { resetError } from "../../redux/slices/userSlice"

const Signup: React.FC = () => {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	const dispatch = useAppDispatch()
	const loading = useAppSelector(state => state.userReducer.isLoading)
	const error = useAppSelector(state => state.userReducer.error)

	const disabled = !username || !password || !confirmPassword || confirmPassword !== password

	const signup = () => {
		dispatch(authThunk({username, password, type: "signup"}))
	}

	useEffect(() => {
		return () => {
			dispatch(resetError())
		}
	}, [])


	return (
		<AuthTemplate title="Sign up" error={error} button={
			<Button
				content="Sign up"
				onClick={signup}
				disabled={disabled}
				loading={loading}
			/>
		}>
			<Input
				name="username"
				placeholder="Username"
				type="text"
				value={username}
				onChange={(e) => setUsername(e.currentTarget.value)}
			/>
			<Input
				name="password"
				placeholder="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.currentTarget.value)}
			/>
			<Input
				name="confirmPassword"
				placeholder="Confirm password"
				type="password"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.currentTarget.value)}
			/>
		</AuthTemplate>
	)
}

export default Signup