import { LinkButton } from "~/components/primitives/Buttons";
import {
  PageHeader,
  PageTitleRow,
  PageTitle,
  PageButtons,
  PageDescription,
  PageTabs,
} from "~/components/primitives/PageHeader";
import { useOrganization } from "~/hooks/useOrganizations";
import {
  newProjectPath,
  organizationPath,
  organizationTeamPath,
} from "~/utils/pathBuilder";

export function OrgAdminHeader() {
  const organization = useOrganization();

  return (
    <PageHeader hideBorder>
      <PageTitleRow>
        <PageTitle title={organization.title} />
        <PageButtons>
          <LinkButton
            to={newProjectPath(organization)}
            variant="primary/small"
            shortcut="N"
          >
            Create a new project
          </LinkButton>
        </PageButtons>
      </PageTitleRow>
      <PageDescription>Manage your projects and team.</PageDescription>
      <PageTabs
        tabs={[
          { label: "Projects", to: organizationPath(organization) },
          { label: "Team", to: organizationTeamPath(organization) },
        ]}
      />
    </PageHeader>
  );
}
