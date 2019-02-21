workflow "Build and deploy on push" {
  on = "push"
  resolves = [
    "deploy: gh-pages",
  ]
}

action "npm: install dependencies" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "npm: build html" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["npm: install dependencies"]
  args = "run html"
}

action "npm: build css" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["npm: install dependencies"]
  args = "run css"
}

action "deploy: gh-pages" {
  uses = "maxheld83/ghpages@v0.2.1"
  needs = ["npm: build html", "npm: build css"]
  secrets = ["GH_PAT"]
  env = {
    BUILD_DIR = "."
  }
}
