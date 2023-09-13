import React, { createContext, useContext, useEffect, useState } from 'react';

// import { getToken } from '../../helpers/db';
import { useErrorNotification } from '../../hooks/useErrorNotification';

interface IProps {
	children: React.ReactNode;
}
interface IFetchContext {
	getSecretKey(): void;
	regenerateSecretKey(): void;
	key: string;
	loadingRegenerate: boolean;
	loading: boolean;
}

export interface ISecretKey {
	id: number;
	status: boolean;
	message: string;
	webhookUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Fetch: any = createContext({});
export const useFetchContext = () => useContext<IFetchContext>(Fetch);

const FetchProvider: React.FC<IProps> = ({ children }) => {
	const [key, setKey] = useState('');
	const [loading, setLoading] = useState(true);
	const [loadingRegenerate, setLoadingRegenerate] = useState(false);
	const WEBFLOW_API = 'https://template-uspacy.alterego.biz.ua/webflow/v1';
	const { errorNotification } = useErrorNotification();
	const getSecretKey = async () => {
		setLoading(true);
		try {
			// const token = await getToken();
			const token =
				// eslint-disable-next-line max-len
				'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0YWdlMy5zdGFnaW5nLnVzcGFjeS50ZWNoL2F1dGgvdjEvYXV0aC9yZWZyZXNoX3Rva2VuIiwiaWF0IjoxNjk0NDIwODIxLCJleHAiOjE2OTQ1ODk4NDIsIm5iZiI6MTY5NDU4NjI0MiwianRpIjoiVmdLcG14b0NhTldGOFRSVyIsImlkIjozMTgsImVtYWlsIjoiZ1JhRmlubjg4KzIwMEBnbWFpbC5jb20iLCJzdWIiOiIzMTgiLCJhdXRoVXNlcklkIjoxNTksImZpcnN0TmFtZSI6ItC_0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCIsImxhc3ROYW1lIjoi0LrQvtGG0L3Rg9GC0YvQuSIsIndvcmtzcGFjZUlkIjoic3RhZ2UzIiwiZG9tYWluIjoic3RhZ2UzLnN0YWdpbmcudXNwYWN5LnRlY2giLCJyb2xlcyI6WyJ5eXl5eSJdLCJkZXBhcnRtZW50cyI6WzFdLCJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOlsiY3JtLmxlYWRzLmNyZWF0ZS5hbGxvd2VkIiwiY3JtLmNvbnRhY3RzLmNyZWF0ZS5hbGxvd2VkIiwiY3JtLmNvbXBhbmllcy5jcmVhdGUuYWxsb3dlZCIsImNybS5hY3Rpdml0eS5jcmVhdGUuYWxsb3dlZCIsInRhc2tzLnRhc2suY3JlYXRlLmFsbG93ZWQiXSwidmlldyI6WyJjcm0ubGVhZHMudmlldy5hbGxvd2VkIiwiY3JtLmNvbnRhY3RzLnZpZXcuYWxsb3dlZCIsImNybS5jb21wYW5pZXMudmlldy5hbGxvd2VkIiwiY3JtLmRlYWxzLnZpZXcubWluZSIsImNybS5hY3Rpdml0eS52aWV3Lm1pbmUiLCJ0YXNrcy50YXNrLnZpZXcubWluZSJdLCJlZGl0IjpbImNybS5sZWFkcy5lZGl0Lm1pbmUiLCJjcm0uY29udGFjdHMuZWRpdC5taW5lIiwiY3JtLmNvbXBhbmllcy5lZGl0LmFsbG93ZWQiLCJjcm0uZGVhbHMuZWRpdC5taW5lIiwiY3JtLmFjdGl2aXR5LmVkaXQubWluZSIsInRhc2tzLnRhc2suZWRpdC5taW5lIiwidGFza3MudGVtcGxhdGUuZWRpdC5hbGxvd2VkIl0sImRlbGV0ZSI6WyJjcm0uY29tcGFuaWVzLmRlbGV0ZS5hbGxvd2VkIiwiY3JtLmFjdGl2aXR5LmRlbGV0ZS5taW5lIiwidGFza3MudGFzay5kZWxldGUubWluZSIsImNybS5jb250YWN0cy5kZWxldGUubWluZSIsImNybS5kZWFscy5kZWxldGUubWluZSIsImNybS5sZWFkcy5kZWxldGUubWluZSJdfSwidGFyaWZmSWQiOjN9.ejbSFV8JzRniw1ZHLhuNKQajbx7CLjXTHIYv0FvYxoo';
			const res = await fetch(`${WEBFLOW_API}/keys/getWebhookUrl`, {
				headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			});
			const data: ISecretKey = await res.json();
			setKey(data?.webhookUrl || '');
		} catch (e) {
			errorNotification();
		} finally {
			setLoading(false);
		}
	};

	const regenerateSecretKey = async () => {
		setLoadingRegenerate(true);
		try {
			// const token = await getToken();
			const token =
				// eslint-disable-next-line max-len
				'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0YWdlMy5zdGFnaW5nLnVzcGFjeS50ZWNoL2F1dGgvdjEvYXV0aC9yZWZyZXNoX3Rva2VuIiwiaWF0IjoxNjk0NDIwODIxLCJleHAiOjE2OTQ1ODk4NDIsIm5iZiI6MTY5NDU4NjI0MiwianRpIjoiVmdLcG14b0NhTldGOFRSVyIsImlkIjozMTgsImVtYWlsIjoiZ1JhRmlubjg4KzIwMEBnbWFpbC5jb20iLCJzdWIiOiIzMTgiLCJhdXRoVXNlcklkIjoxNTksImZpcnN0TmFtZSI6ItC_0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCIsImxhc3ROYW1lIjoi0LrQvtGG0L3Rg9GC0YvQuSIsIndvcmtzcGFjZUlkIjoic3RhZ2UzIiwiZG9tYWluIjoic3RhZ2UzLnN0YWdpbmcudXNwYWN5LnRlY2giLCJyb2xlcyI6WyJ5eXl5eSJdLCJkZXBhcnRtZW50cyI6WzFdLCJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOlsiY3JtLmxlYWRzLmNyZWF0ZS5hbGxvd2VkIiwiY3JtLmNvbnRhY3RzLmNyZWF0ZS5hbGxvd2VkIiwiY3JtLmNvbXBhbmllcy5jcmVhdGUuYWxsb3dlZCIsImNybS5hY3Rpdml0eS5jcmVhdGUuYWxsb3dlZCIsInRhc2tzLnRhc2suY3JlYXRlLmFsbG93ZWQiXSwidmlldyI6WyJjcm0ubGVhZHMudmlldy5hbGxvd2VkIiwiY3JtLmNvbnRhY3RzLnZpZXcuYWxsb3dlZCIsImNybS5jb21wYW5pZXMudmlldy5hbGxvd2VkIiwiY3JtLmRlYWxzLnZpZXcubWluZSIsImNybS5hY3Rpdml0eS52aWV3Lm1pbmUiLCJ0YXNrcy50YXNrLnZpZXcubWluZSJdLCJlZGl0IjpbImNybS5sZWFkcy5lZGl0Lm1pbmUiLCJjcm0uY29udGFjdHMuZWRpdC5taW5lIiwiY3JtLmNvbXBhbmllcy5lZGl0LmFsbG93ZWQiLCJjcm0uZGVhbHMuZWRpdC5taW5lIiwiY3JtLmFjdGl2aXR5LmVkaXQubWluZSIsInRhc2tzLnRhc2suZWRpdC5taW5lIiwidGFza3MudGVtcGxhdGUuZWRpdC5hbGxvd2VkIl0sImRlbGV0ZSI6WyJjcm0uY29tcGFuaWVzLmRlbGV0ZS5hbGxvd2VkIiwiY3JtLmFjdGl2aXR5LmRlbGV0ZS5taW5lIiwidGFza3MudGFzay5kZWxldGUubWluZSIsImNybS5jb250YWN0cy5kZWxldGUubWluZSIsImNybS5kZWFscy5kZWxldGUubWluZSIsImNybS5sZWFkcy5kZWxldGUubWluZSJdfSwidGFyaWZmSWQiOjN9.ejbSFV8JzRniw1ZHLhuNKQajbx7CLjXTHIYv0FvYxoo';
			await fetch(`${WEBFLOW_API}/keys/updateKey`, {
				method: 'POST',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			});
			getSecretKey();
			// const data: ISecretKey = await res.json();
			// setKey(data?.webhookUrl || '');
		} catch (e) {
			errorNotification();
		} finally {
			setLoadingRegenerate(false);
		}
	};

	useEffect(() => {
		getSecretKey();
	}, []);

	return (
		<Fetch.Provider
			value={{
				getSecretKey,
				regenerateSecretKey,
				key,
				loadingRegenerate,
				loading,
			}}
		>
			{children}
		</Fetch.Provider>
	);
};

export default FetchProvider;
