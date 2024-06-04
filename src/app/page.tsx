import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import * as FileInput from '@/components/Form/FileInput'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { SelectInput } from '@/components/Form/SelectInput'
import { SelectItem } from '@/components/Form/SelectInput/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          action=""
          className="divide-y-zinc-200 mt-6 flex w-full flex-col gap-5 divide-y"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue={'Leonardo'} />
              </InputRoot>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only"
                >
                  Last name
                </label>

                <InputRoot>
                  <InputControl id="lastName" defaultValue={'Schunck'} />
                </InputRoot>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>

            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="leo@gmail.com"
              />
            </InputRoot>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </p>
            </label>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.Root>
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <InputRoot>
              <InputControl
                id="role"
                type="text"
                defaultValue="Fullstack Developer"
              />
            </InputRoot>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <SelectInput placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </SelectInput>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <SelectInput placeholder="Select a timezone...">
              <SelectItem
                value="pst"
                text="Pacific Standard Time (PST) (UTC-08:00)"
              />
              <SelectItem
                value="utc"
                text="America São Paulo (UTC) (UTC-03:00)"
              />
            </SelectInput>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introduction.
              </p>
            </label>

            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <SelectInput placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </SelectInput>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      strokeWidth={3}
                      className="h-4 w-4 text-zinc-500"
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </p>
            </label>

            <div className="flex flex-col">
              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.FileList />
                <FileInput.Control multiple />
              </FileInput.Root>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
