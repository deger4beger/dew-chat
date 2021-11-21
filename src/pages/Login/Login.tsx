import React, {useState, useEffect} from 'react'
import Input from '../../components/shared/Input/Input';
import AuthTemplate from '../../components/templates/AuthTemplate/AuthTemplate';
import Button from '../../components/shared/Button/Button';
import { authThunk } from '../../redux/slices/userThunks';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { resetError } from '../../redux/slices/userSlice';

const Login: React.FC = () => {

	const [username, setUsername] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const dispatch = useAppDispatch()
	const loading = useAppSelector(state => state.userReducer.isLoading)
	const error = useAppSelector(state => state.userReducer.error)

	const disabled = !username || !password

	const login = () => {
		dispatch(authThunk({username, password, type: "login"}))
	}

	useEffect(() => {
		return () => {
			dispatch(resetError())
		}
	}, [])

	return (
		<AuthTemplate title="Login" error={error} button={
			<Button
				content="Login"
				onClick={login}
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
		</AuthTemplate>
	)
}

export default Login