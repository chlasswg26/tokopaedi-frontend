import { joiResolver } from '@hookform/resolvers/joi'
import React, { Fragment, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as Joi from 'joi'
import { useDidUpdate } from '@mantine/hooks'
import toast from 'react-hot-toast'
import { getProfileActionCreator, putProfileActionCreator } from '../redux/action/creator/profile'
import { createFormData } from '../utils/form-data'
import { logoutActionCreator } from '../redux/action/creator/auth'

const EditProfileSchema = Joi.object({
  name: Joi.string().label('Name').min(4).required(),
  store: Joi.string().label('Store name').max(120).allow('').optional(),
  phone: Joi.number().label('Phone').min(10).allow('').optional()
})

const EditProfile = () => {
  const profile = useSelector(state => state.profile.get)
  const updateProfile = useSelector((state) => state.profile.put)
  const [avatar, setAvatar] = useState(false)
  const fileActionRef = useRef()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(EditProfileSchema)
  })
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(
      putProfileActionCreator({
        id: profile?.response?.id,
        value: createFormData(
          {
            single: avatar
          },
          data
        )
      })
    )
  }

  useDidUpdate(() => {
    toast.remove()

    if (errors.name) toast.error(errors?.name?.message)

    if (errors.store) toast.error(errors?.store?.message)

    if (errors.phone) toast.error(errors?.phone?.message)
  }, [errors])

  useDidUpdate(() => {
    toast.remove()

    if (updateProfile?.isPending) toast.loading('Loading...')

    if (updateProfile?.isRejected) toast.error(updateProfile?.errorMessage)

    if (updateProfile?.isFulfilled) {
      reset()

      dispatch(getProfileActionCreator())

      toast.success('Profile updated!', {
        duration: 10000
      })
    }
  }, [updateProfile])

  return (
    <Fragment>
      <div className='card right-menu shadow-sm flex-nowrap'>
        <h5 className='card-title right-menu-title mb-3'>My profile store</h5>
        <h6 className='card-subtitle mb-2 text-muted'>
          Manage your profile information
        </h6>

        <hr className='hr-right-menu' />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-7'>
              <div className='hstack mb-4'>
                <label htmlFor='profile-name' className='profile-label'>
                  Name
                </label>
                <input
                  className='form-control form-control-lg font-input font-input-profile'
                  type='text'
                  id='profile-name'
                  defaultValue={profile?.response?.name}
                  {...register('name')}
                />
              </div>
              <div className='hstack mb-4'>
                <label htmlFor='profile-email' className='profile-label'>
                  Email
                </label>
                <input
                  className='form-control form-control-lg font-input font-input-profile'
                  type='text'
                  id='profile-email'
                  disabled
                  defaultValue={profile?.response?.email}
                />
              </div>
              {profile?.response?.role === 'seller' && (
                <Fragment>
                  <div className='hstack mb-4'>
                    <label htmlFor='phone-number' className='profile-label'>
                      Phone number
                    </label>
                    <input
                      className='form-control form-control-lg font-input font-input-profile'
                      type='text'
                      id='phone-number'
                      defaultValue={profile?.response?.phone}
                      {...register('phone')}
                    />
                  </div>
                  <div className='hstack mb-4'>
                    <label htmlFor='store-name' className='profile-label'>
                      Store name
                    </label>
                    <textarea
                      className='form-control form-control-lg font-input font-input-profile textarea-store'
                      type='text'
                      id='store-name'
                      defaultValue={profile?.response?.store || ''}
                      {...register('store')}
                    />
                  </div>
                </Fragment>
              )}

              <div className='hstack gap-3'>
                <button
                  type='submit'
                  className='btn rounded-pill btn-save-profile'
                >
                  Save
                </button>

                <button
                  type='button'
                  className='btn rounded-pill btn-danger'
                  onClick={() => dispatch(logoutActionCreator())}
                >
                  Logout
                </button>
              </div>
            </div>
            <div className='col'>
              <div className='hstack'>
                <div className='vr height-vr' />

                <hr className='profile-hr-mobile' />

                <div className='vstack'>
                  <div className='profile-photo mb-4'>
                    <img
                      src={`${
                        avatar
                          ? URL.createObjectURL(avatar)
                          : !profile?.response?.picture
                          ? `https://avatars.dicebear.com/api/identicon/${profile?.response?.email}.svg`
                          : profile?.response?.picture
                      }`}
                      alt={`${profile?.response?.name} Avatar`}
                      loading='lazy'
                      className='rounded-circle profile-badge-avatar'
                    />
                    <input
                      ref={fileActionRef}
                      onChange={(event) => setAvatar(event.target.files[0])}
                      type='file'
                      hidden
                    />

                    <button
                      type='button'
                      className='btn rounded-pill btn-select-image'
                      onClick={() =>
                        fileActionRef.current && fileActionRef.current.click()
                      }
                    >
                      Select image
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default EditProfile
