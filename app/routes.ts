import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  route("/action/set-theme", "./action.set-theme.ts"),
  layout("./common/layouts/nav-layout.tsx", [
    index("./features/home/home-page.tsx"),
    ...prefix("/cards", [
      route("/create", "./features/cards/pages/create-card-page.tsx"),
      route("/:id", "./features/cards/pages/card-detail-page.tsx"),
    ]),
    route("/profile", "./features/profiles/pages/profile-page.tsx"),
  ]),
] satisfies RouteConfig;
