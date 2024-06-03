import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import * as FileInput from '@/components/Form/FileInput'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { SelectInput } from '@/components/Form/SelectInput'
import { SelectItem } from '@/components/Form/SelectInput/SelectItem'
import { Textarea } from '@/components/Form/Textarea'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-100"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          action=""
          className="divide-y-zinc-200 mt-6 flex w-full flex-col gap-5 divide-y"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl id="firstName" defaultValue={'Leonardo'} />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue={'Schunck'} />
              </InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
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
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </p>
            </label>

            <div className="flex items-start gap-5">
              <FileInput.Root>
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
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
          <div className="grid grid-cols-form gap-3 pt-5">
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
          <div className="grid grid-cols-form gap-3 pt-5">
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
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introduction.
              </p>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <SelectInput placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </SelectInput>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100"
                  >
                    <Bold strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100"
                  >
                    <Italic strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100"
                  >
                    <Link strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100"
                  >
                    <List strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100"
                  >
                    <ListOrdered
                      strokeWidth={3}
                      className="h-4 w-4 text-zinc-500"
                    />
                  </button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
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
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-100"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
