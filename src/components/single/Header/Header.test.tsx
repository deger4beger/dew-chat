import React from "react"
import { render, screen } from "@testing-library/react"
import AppProvider from 'providers/AppProvider';
import * as CustomReduxHooks from "hooks/redux"
import Header from './Header';

jest.mock("./PrivateMenu/PrivateMenu", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="PrivateMenu" />
    ))
}))
jest.mock("./PublicMenu/PublicMenu", () => ({
    __esModule: true,
    default: jest.fn(() => (
        <div data-testid="PublicMenu" />
    ))
}))

describe("Header component", () => {

    beforeEach(() => {
        useSelectorMock.mockClear()
    })

    const useSelectorMock = jest.spyOn(CustomReduxHooks, 'useAppSelector')

    it("PrivateMenu shown when user is authorized", () => {

        useSelectorMock.mockReturnValue(true)

        render(<AppProvider component={<Header />} />)

        expect(screen.queryByTestId("PrivateMenu"))
            .toBeInTheDocument()
        expect(screen.queryByTestId("PublicMenu"))
            .not.toBeInTheDocument()

    })

    it("PrivateMenu not shown when use is not authorized", () => {

        useSelectorMock.mockReturnValue(false)

        render(<AppProvider component={<Header />} />)

        expect(screen.queryByTestId("PrivateMenu"))
            .not.toBeInTheDocument()
        expect(screen.queryByTestId("PublicMenu"))
            .toBeInTheDocument()

    })

})