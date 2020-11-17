import React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom'
import { LinkTags } from 'pages/linkTags'
import { LinkTagsRegister } from 'pages/linkTags/LinkTagsRegister'

export const Router = () => {
  return (
    <MemoryRouter>
      <Switch>
        <Route exact path="/">
          <LinkTags />
        </Route>
        <Route path="/linkTags/register">
          <LinkTagsRegister />
        </Route>
      </Switch>
    </MemoryRouter>
  )
}
