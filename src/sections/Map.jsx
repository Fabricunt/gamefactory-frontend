import * as React from 'react'
import StaticMap, { Popup, Marker } from 'react-map-gl'
import * as yup from 'yup'
import { useFormik } from 'formik'

import SocialLink from '../components/SocialLink/SocialLink'
import Title from '../components/Title'
import mapMarkerSVG from '../icons/mapMarkerSVG.svg'
import MapWrapper from '../components/Map/MapWrapper'
import MapContent from '../components/Map/MapContent'
import MapMarkerWrapper from '../components/Map/MapMarkerWrapper'
import MapMarkerImage from '../components/Map/MapMarkerImage'
import MapMarkerContent from '../components/Map/MapMarkerContent'
import MapPopupWrapper from '../components/Map/MapPopupWrapper'
import MapPopupHeading from '../components/Map/MapPopupHeading'
import MapPopupHeadingText from '../components/Map/MapPopupHeadingText'
import MapPopupHeadingIcon from '../components/Map/MapPopupHeadingIcon'
import MapPopupContent from '../components/Map/MapPopupContent'
import MapPopupColumn from '../components/Map/MapPopupColumn'
import MapPopupFormInput from '../components/Map/MapPopupFormInput'
import MapPopupFormButton from '../components/Map/MapPopupFormButton'
import MapPopupFormContactUs from '../components/Map/MapPopupFormContactUs'
import MapPopupFormWrapper from '../components/Map/MapPopupFormWrapper'
import MapPopupFormContent from '../components/Map/MapPopupFormContent'
import MapPopupItem from '../components/Map/MapPopupItem'
import MapPopupItemText from '../components/Map/MapPopupItemText'
import MapPopupFooter from '../components/Map/MapPopupFooter'
import MapGlobalWrapper from '../components/Map/MapGlobalWrapper'
import MapHeading from '../components/Map/MapHeading'
import useMedia from '../hooks/use-media'
import useElementOnScreen from '../hooks/use-element-on-screen'

import 'mapbox-gl/dist/mapbox-gl.css'
import MapPopupFormSending from '../components/Map/MapPopupFormSending'
import MapPopupFormSuccess from '../components/Map/MapPopupFormSuccess'

const validationSchema = yup.object({
  name: yup.string('Full Name').required('Name is required'),
  email: yup.string('Email').email('Enter a valid email').required('Email is required'),
  message: yup.string('About project').required('Message is required'),
})

export default function Map({
  accessToken,
  mapStyle,
  modalTitle,
  socialColumn,
  adress,
  sectionId,
  sectionTitle,
}) {
  const [rendered, setRendered] = React.useState(true)
  const [containerRef, isOnScreen] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })

  const formik = useFormik({
    initialValues: {
      formId: 'Contacts Form',
      email: '',
      message: '',
    },
    isInitialValid: false,
    validationSchema,
  })

  const [showPopup, togglePopup] = React.useState(true)

  const [prevFormState, setPrevFormState] = React.useState(formik.initialValues)
  const [showForm, setShowForm] = React.useState(typeof window === 'undefined')
  const [sending, setSending] = React.useState(false)
  const [final, setFinal] = React.useState(false)
  const [error, setError] = React.useState(false)

  const toggleFormHandle = () => setShowForm(!showForm)

  const mapCoordinates = useMedia(
    ['(max-width: 768px)', '(max-width: 991px)', '(min-width: 992px)'],

    [
      { mapCords: { longitude: 30.234452, latitude: 55.159352, zoom: 2 }, popupOffset: [0, -90] },
      { mapCords: { longitude: 30.234452, latitude: 55.159352, zoom: 3 }, popupOffset: [10, -90] },
      { mapCords: { longitude: 30.234452, latitude: 55.159352, zoom: 3 }, popupOffset: [120, -35] },
    ],

    { longitude: 30.234452, latitude: 55.159352, zoom: 2 },
  )
  const [viewState, setViewState] = React.useState(mapCoordinates)

  React.useEffect(() => {
    setViewState(mapCoordinates)
  }, [mapCoordinates])

  // React.useEffect(() => {
  //   if (isOnScreen && !rendered) {
  //     setRendered(true)
  //   }
  // }, [isOnScreen])

  return (
    <MapGlobalWrapper id={sectionId} disablePaddingBottom>
      {sectionTitle && (
        <MapHeading>
          <Title as="h2">{sectionTitle}</Title>
        </MapHeading>
      )}
      {typeof window === 'undefined' && (
        <MapPopupFormContent
          showForm={showForm}
          formName="ContactsForm"
          formValues={formik.values}
          preSubmit={() => {
            setSending(true)
            setFinal(false)
            return true
          }}
          onError={() => {
            setError(true)
            setSending(false)
            setFinal(false)
          }}
          postSubmit={() => {
            formik.resetForm()
            setSending(false)
            setFinal(true)
          }}
        >
          {typeof window === 'undefined' && (
            <MapPopupFormInput type="text" key="formId" name="formId" />
          )}
          <MapPopupFormInput
            type="email"
            key="email"
            name="email"
            error={formik.errors.email}
            onChange={formik.handleChange}
            value={formik.values.email}
            required
            placeholder="Enter your email"
          />
          <MapPopupFormInput
            as="textarea"
            error={formik.errors.message}
            onChange={formik.handleChange}
            value={formik.values.message || ''}
            type="text"
            key="message"
            name="message"
            required
            rows="2"
            placeholder="Enter your comments"
          />
          <MapPopupFormButton id="contacts-form-submit" type="submit">
            Submit
          </MapPopupFormButton>
          {(sending || final || error) && (
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                background: '#fff',
                top: 0,
              }}
            >
              {error ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '15px',
                  }}
                >
                  <MapPopupItemText>Couldn't send the form.</MapPopupItemText>
                  <MapPopupItemText>Please, try again</MapPopupItemText>
                  <MapPopupFormButton onClick={() => setError(false)}>Close</MapPopupFormButton>
                </div>
              ) : null}
              {sending ? <MapPopupFormSending /> : null}
              {final ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '15px',
                  }}
                >
                  <MapPopupFormSuccess />
                  <MapPopupItemText>Your form submited</MapPopupItemText>
                  <MapPopupFormButton onClick={() => setFinal(false)}>Close</MapPopupFormButton>
                </div>
              ) : null}
            </div>
          )}
        </MapPopupFormContent>
      )}
      <MapWrapper>
        <MapContent ref={containerRef} showPopup={showPopup}>
          {(rendered || typeof window === 'undefined') && (
            <StaticMap
              width="100%"
              height="100%"
              interactive={false}
              {...viewState.mapCords}
              mapboxAccessToken={
                accessToken ||
                'pk.eyJ1IjoibWl0c3VydXlhbm8iLCJhIjoiY2twZTV0YzNtMDA3ajMwbW0wejVhOGJmYSJ9.hDirJuIEW4ZeV1cCH5GG_w'
              }
              mapStyle={mapStyle || 'mapbox://styles/mitsuruyano/ckrqds91r1okr19ls7svem4kb'}
            >
              {showPopup ? null : (
                <Marker latitude={56.7859352} longitude={29.834452}>
                  <MapMarkerWrapper onClick={() => togglePopup(true)}>
                    <MapMarkerImage src={mapMarkerSVG} />

                    <MapMarkerContent viewBox="0 0 114.66667 90.666664">
                      <path
                        fill="currentColor"
                        d="M 66.704517,5.3732058 C 63.020446,4.3199712 59.476788,2.5612461 55.697837,1.9847323 51.005954,1.5499836 46.313456,1.3299694 41.618814,1.857627 31.186903,2.3291539 21.404702,7.6235004 14.287555,15.106165 9.0520706,20.977117 4.7922659,27.929148 2.9105674,35.615254 2.5004972,39.283769 1.3684115,42.925667 1.4262946,46.611082 c 0.4469053,4.954587 0.6726008,10.034485 2.7434597,14.636745 1.1753228,3.116408 2.5678022,6.21952 4.2048972,9.09892 4.4503065,5.490376 9.1707105,10.986024 15.4931375,14.371048 4.634139,2.735235 9.678299,4.868151 15.044967,5.565699 3.89769,0.406733 7.888029,0.170159 11.810728,0.125574 3.714942,-0.482662 7.515665,-0.607572 10.949013,-2.264628 4.691964,-1.873096 9.202481,-4.459699 13.008918,-7.799318 7.184771,-6.229848 11.207408,-15.219511 13.915151,-24.154664 1.304166,-1.483586 3.127887,-1.206902 4.954698,-1.211 3.22236,-0.04368 8.177066,-0.02754 8.952166,-0.372081 0.4295,-1.466615 0.83181,-3.047424 1.25977,-4.819548 0.82584,-4.298269 2.40321,-12.882929 2.03492,-13.076715 0.17103,-0.635206 -2.74347,-0.378481 -4.49417,-0.366098 -3.556748,0.02709 -7.194494,0.130547 -10.761709,-0.313613 -2.865657,-0.798423 -2.001788,-4.106162 -1.754116,-6.387182 0.309824,-2.734551 0.379278,-5.712535 2.648096,-7.607068 1.994848,-1.578096 4.332227,-2.119887 6.819623,-2.106856 3.771996,0.0032 7.654946,-0.03757 11.294816,-0.210201 1.52529,-6.244765 2.82628,-12.6220971 4.26533,-18.91783623 C 106.12736,0.88087945 98.414456,0.68763571 90.740935,0.93546255 87.283308,1.4326724 83.883008,2.127153 80.742638,3.7161111 c -3.478884,1.4058228 -5.996299,4.4919305 -7.905765,7.6109799 -2.30187,4.173108 -3.593311,8.903137 -4.190972,13.608488 -0.151668,3.426136 0.312342,6.923256 -0.247733,10.303877 -2.122781,1.968896 -5.313571,0.848099 -7.928153,1.154872 -5.35113,0.132918 -10.750061,-0.268952 -16.070595,0.206256 -2.923558,0.973315 -4.960917,3.791282 -5.961126,6.634356 -0.589384,3.602213 0.662539,7.580642 3.938417,9.475078 3.644564,2.731273 8.416912,1.382261 12.623423,1.704789 3.680476,0.07577 7.419902,-0.149794 11.064463,0.109561 2.1618,0.603461 0.458222,2.444516 -0.110813,3.67886 -1.102305,2.291274 -2.226566,4.566372 -4.298231,6.14341 -2.300627,2.185815 -4.803706,4.269499 -7.943036,5.066765 -4.103683,1.334164 -8.436474,0.535589 -12.6683,0.802333 -4.013596,-0.858952 -7.791781,-2.788531 -10.549318,-5.870143 -1.850004,-1.971538 -3.910932,-3.954346 -5.178037,-6.335341 -1.564991,-3.31671 -2.164547,-6.988309 -2.442886,-10.607931 -0.166605,-5.652861 0.82501,-11.580548 4.289624,-16.196025 2.749778,-3.940883 6.601564,-7.216101 11.161844,-8.844 4.567825,-1.941246 9.679293,-1.318537 14.484866,-0.930588 3.259325,0.831533 6.092638,1.911572 9.001919,3.569982 1.599211,-6.682278 3.186951,-12.805975 4.892288,-19.6284842 z"
                      />
                    </MapMarkerContent>
                  </MapMarkerWrapper>
                </Marker>
              )}
              (
              <Popup
                latitude={55.159352}
                longitude={30.234452}
                closeButton={false}
                closeOnClick={false}
                focusAfterOpen={false}
                anchor="center"
              >
                <MapPopupWrapper>
                  <MapPopupHeading>
                    <MapPopupHeadingText>{modalTitle}</MapPopupHeadingText>
                    <MapPopupHeadingIcon onClick={() => togglePopup(false)} />
                  </MapPopupHeading>
                  <MapPopupContent>
                    {socialColumn.map((el) => {
                      return (
                        <MapPopupColumn key={el.id}>
                          {el.socialLink.map(({ text, url, icon, id }) => {
                            return (
                              <MapPopupItem key={id} to={url}>
                                <SocialLink
                                  icon={icon}
                                  color="#222222"
                                  hoverColor="#222222"
                                  needCircle={false}
                                  ariaLabel={`Open - ${icon}`}
                                  variant="map"
                                />
                                <MapPopupItemText>{text}</MapPopupItemText>
                              </MapPopupItem>
                            )
                          })}
                        </MapPopupColumn>
                      )
                    })}
                  </MapPopupContent>
                  <MapPopupFormWrapper>
                    <MapPopupFormContactUs onClick={toggleFormHandle}>
                      {/* <SocialLink
                        icon="Mail"
                        color="#222222"
                        hoverColor="#222222"
                        ariaLabel={`Open - form`}
                        variant="map"
                        needCircle={false}
                      ></SocialLink>{' '} */}
                      <span>Contact us</span>
                    </MapPopupFormContactUs>
                    <MapPopupFormContent
                      showForm={showForm}
                      formName="ContactsForm"
                      formValues={formik.values}
                      preSubmit={() => {
                        setSending(true)
                        setFinal(false)
                      }}
                      onError={() => {
                        setError(true)
                        setSending(false)
                        setFinal(false)
                      }}
                      postSubmit={() => {
                        formik.resetForm()
                        setSending(false)
                        setFinal(true)
                      }}
                    >
                      {typeof window === 'undefined' && (
                        <MapPopupFormInput type="text" key="formId" name="formId" />
                      )}
                      <MapPopupFormInput
                        type="email"
                        key="email"
                        name="email"
                        error={formik.errors.email}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required
                        placeholder="Enter your email"
                      />
                      <MapPopupFormInput
                        as="textarea"
                        error={formik.errors.message}
                        onChange={formik.handleChange}
                        value={formik.values.message || ''}
                        type="text"
                        key="message"
                        name="message"
                        required
                        rows="2"
                        placeholder="Enter your comments"
                      />
                      <MapPopupFormButton id="contacts-form-submit" type="submit">
                        Submit
                      </MapPopupFormButton>
                      {(sending || final || error) && (
                        <div
                          style={{
                            position: 'absolute',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                            background: '#fff',
                            top: 0,
                          }}
                        >
                          {error ? (
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '15px',
                              }}
                            >
                              <MapPopupItemText>Couldn't send the form.</MapPopupItemText>
                              <MapPopupItemText>Please, try again</MapPopupItemText>
                              <MapPopupFormButton onClick={() => setError(false)}>
                                Close
                              </MapPopupFormButton>
                            </div>
                          ) : null}
                          {sending ? <MapPopupFormSending /> : null}
                          {final ? (
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '15px',
                              }}
                            >
                              <MapPopupFormSuccess />
                              <MapPopupItemText>Your form submited</MapPopupItemText>
                              <MapPopupFormButton onClick={() => setFinal(false)}>
                                Close
                              </MapPopupFormButton>
                            </div>
                          ) : null}
                        </div>
                      )}
                    </MapPopupFormContent>
                  </MapPopupFormWrapper>
                  <MapPopupFooter>
                    <SocialLink
                      color="#222222"
                      hovercolor="#222222"
                      needcircle="false"
                      icon="House"
                      variant={'map'}
                    />
                    <span>{adress}</span>
                  </MapPopupFooter>
                </MapPopupWrapper>
              </Popup>
              )
            </StaticMap>
          )}
        </MapContent>
      </MapWrapper>
    </MapGlobalWrapper>
  )
}
