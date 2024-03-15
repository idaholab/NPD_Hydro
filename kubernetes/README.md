### Deployment

The deployment pipelines are run on GitHub through use of `runners`. These runners are standalone servers that are managed by an INL architect in Information Management.

DOE policy requires multiple custody of assets in the DMZ, meaning you can write the infrastructure, but after appropriate review, the IM architect will make the release.

In Digital Engineering, we only have full custody of `development` and `acceptance` environments.

#### Development

The development workflow in `.github/workflows/development.yaml` builds the container images and stores them in Azure Container Registry.

From there, the names of the images are referenced in the `development.yaml` manifest, here in the `kubernetes` directory.

#### Acceptance and Production

The acceptance workflow in `.github/workflows/acceptance.yaml` actually builds production containers. That means both the `acceptance.yaml` and `production.yaml` reference the same container images.

The `production.yaml` manifest in this directory stands up the same resources on the cluster, but it does so by pointing to the previously built production images from `acceptance.yaml`.

It follows that the only action in the `.github/workflows/production.yaml` workflow is to apply environment variables as needed, and apply the `production.yaml` manifest on the cluster.
