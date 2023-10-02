export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: any[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  temp_clone_token: null;
  network_count: number;
  subscribers_count: number;
}

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
export interface Commit {
  sha: string;
  node_id: string;
  commit: CommitDetails;
  url: string;
  html_url: string;
  comments_url: string;
  author: CommitAuthor;
  committer: CommitAuthor;
  parents: Parent[];
}

export interface CommitAuthor {
  login: Login;
  id: number;
  node_id: NodeID;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: FollowingURL;
  gists_url: GistsURL;
  starred_url: StarredURL;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: EventsURL;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersCarlos8AlbEventsPrivacy = 'https://api.github.com/users/carlos8alb/events{/privacy}',
}

export enum FollowingURL {
  HTTPSAPIGithubCOMUsersCarlos8AlbFollowingOtherUser = 'https://api.github.com/users/carlos8alb/following{/other_user}',
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersCarlos8AlbGistsGistID = 'https://api.github.com/users/carlos8alb/gists{/gist_id}',
}

export enum Login {
  Carlos8Alb = 'carlos8alb',
}

export enum NodeID {
  MDQ6VXNlcjM1OTc2OTYw = 'MDQ6VXNlcjM1OTc2OTYw',
}

export enum StarredURL {
  HTTPSAPIGithubCOMUsersCarlos8AlbStarredOwnerRepo = 'https://api.github.com/users/carlos8alb/starred{/owner}{/repo}',
}

export enum Type {
  User = 'User',
}

export interface CommitDetails {
  author: CommitAuthorClass;
  committer: CommitAuthorClass;
  message: string;
  tree: Tree;
  url: string;
  comment_count: number;
  verification: Verification;
}

export interface CommitAuthorClass {
  name: Name;
  email: Email;
  date: Date;
}

export enum Email {
  Carlos8AlbHotmailCOM = 'carlos8_alb@hotmail.com',
}

export enum Name {
  CarlosAlbarracin = 'Carlos Albarracin',
}

export interface Tree {
  sha: string;
  url: string;
}

export interface Verification {
  verified: boolean;
  reason: Reason;
  signature: null;
  payload: null;
}

export enum Reason {
  Unsigned = 'unsigned',
}

export interface Parent {
  sha: string;
  url: string;
  html_url: string;
}
